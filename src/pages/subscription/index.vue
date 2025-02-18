<template>
    <DashboardLayout>
        <header>
            <heading1>Subscription to Pactto!</heading1>
            <p>
                Welcome to the subscription page. Here you can choose the plan that best fits your needs.
            </p>
        </header>
        <div>
            <div class="mx-auto px-4">
                <!-- xs to lg -->
                <div class="mx-auto mt-4 space-y-8  lg:hidden">
                    <section v-for="tier in tiers" :key="tier.id"
                             :class="[tier.mostPopular ? 'rounded-xl bg-white/5 ring-1 ring-inset ring-white/10' : '', 'p-4']">
                        <h3 :id="tier.id" class="text-sm font-semibold leading-6 text-white">{{ tier.name }}</h3>
                        <p class="mt-2 flex items-baseline gap-x-1">
                            <span class="text-4xl font-bold text-white">{{ tier.priceMonthly }}</span>
                            <span class="text-sm font-semibold text-gray-300">/month</span>
                        </p>
                        <a :href="tier.href" :aria-describedby="tier.id"
                           :class="[tier.mostPopular ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500' : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white', 'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2']">Buy
                            plan</a>
                        <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-white">
                            <li v-for="section in sections" :key="section.name">
                                <ul role="list" class="space-y-4">
                                    <template v-for="feature in section.features" :key="feature.name">
                                        <li v-if="feature.tiers[tier.name]" class="flex gap-x-3">
                                            <CheckIcon class="h-6 w-5 flex-none text-indigo-400" aria-hidden="true"/>
                                            <span>
												  {{ feature.name }}
												  {{ ' ' }}
												  <span v-if="typeof feature.tiers[tier.name] === 'string'"
                                                        class="text-sm leading-6 text-gray-400">({{
                                                          feature.tiers[tier.name]
                                                      }})</span>
											</span>
                                        </li>
                                    </template>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </div>

                <!-- lg+ -->
                <div class="isolate mt-20 hidden lg:block">
                    <div class="relative -mx-8">
                        <div v-if="tiers.some((tier) => tier.mostPopular)"
                             class="absolute inset-x-4 inset-y-0 -z-10 flex">
                            <div class="flex w-1/4 px-4" aria-hidden="true"
                                 :style="{ marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 25}%` }">
                                <div class="w-full rounded-t-xl border-x border-t border-white/10 bg-white/5"/>
                            </div>
                        </div>
                        <table class="w-full table-fixed border-separate border-spacing-x-8 text-left">
                            <caption class="sr-only">
                                Pricing plan comparison
                            </caption>
                            <colgroup>
                                <col class="w-1/4"/>
                                <col class="w-1/4"/>
                                <col class="w-1/4"/>
                                <col class="w-1/4"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <td/>
                                <th v-for="tier in tiers" :key="tier.id" scope="col" class="px-6 pt-6 xl:px-8 xl:pt-8">
                                    <div
                                        class="absolute -top-4 -rotate-12 bg-gradient-to-r from-pink-500 via-custom-accent-red to-custom-primary-yellow text-white font-bold py-1 px-2 rounded"
                                        v-if="tier.mostPopular">
                                        Most Popular
                                    </div>
                                    <div class="text-sm font-semibold leading-7 text-white">{{ tier.name }}</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row"><span class="sr-only">Price</span></th>
                                <td v-for="tier in tiers" :key="tier.id" class="px-6 pt-2 xl:px-8">
                                    <div class="flex items-baseline gap-x-1 text-white">
                                        <span class="text-4xl font-bold">{{ tier.priceMonthly }}</span>
                                        <span class="text-sm font-semibold leading-6">/month</span>
                                    </div>
                                    <Button v-if="tier.mostPopular" :href="tier.href"
                                            class="w-full text-black font-semibold mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Buy plan
                                    </Button>
                                    <Button v-else
                                            class="w-full text-white font-semibold mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                            variant="secondary"
                                    >
                                        Buy plan
                                    </Button>
                                </td>
                            </tr>
                            <template v-for="(section, sectionIdx) in sections" :key="section.name">
                                <tr>
                                    <th scope="colgroup" colspan="4"
                                        :class="[sectionIdx === 0 ? 'pt-8' : 'pt-16', 'pb-4 text-sm font-semibold leading-6 text-white']">
                                        {{ section.name }}
                                        <div class="absolute inset-x-8 mt-4 h-px bg-white/10"/>
                                    </th>
                                </tr>
                                <tr v-for="feature in section.features" :key="feature.name">
                                    <th scope="row" class="py-4 text-sm font-normal leading-6 text-white">
                                        {{ feature.name }}
                                        <div class="absolute inset-x-8 mt-4 h-px bg-white/5"/>
                                    </th>
                                    <td v-for="tier in tiers" :key="tier.id" class="px-6 py-4 xl:px-8">
                                        <div v-if="typeof feature.tiers[tier.name] === 'string'"
                                             class="text-center text-sm leading-6 text-gray-300">{{
                                                feature.tiers[tier.name]
                                            }}
                                        </div>
                                        <template v-else>
                                            <CheckIcon v-if="feature.tiers[tier.name] === true"
                                                       class="mx-auto h-5 w-5 text-custom-primary-yellow"
                                                       aria-hidden="true"/>
                                            <MinusIcon v-else class="mx-auto h-5 w-5 text-custom-secondary-gray"
                                                       aria-hidden="true"/>
                                            <span class="sr-only">{{
                                                    feature.tiers[tier.name] === true ? 'Included' : 'Not included'
                                                }} in {{ tier.name }}</span>
                                        </template>
                                    </td>
                                </tr>
                            </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup>
import {CheckIcon, MinusIcon} from '@heroicons/vue/20/solid'
import DashboardLayout from "@/components/layouts/DashboardLayout.vue";
import Heading1 from "@/components/headings/heading1.vue";
import {Button} from "@/components/ui/button";

const tiers = [
    {
        name: 'Basic',
        id: 'tier-basic',
        href: '#',
        priceMonthly: '$9',
        description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
        mostPopular: false,
    },
    {
        name: 'Essential',
        id: 'tier-essential',
        href: '#',
        priceMonthly: '$29',
        description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
        mostPopular: true,
    },
    {
        name: 'Premium',
        id: 'tier-premium',
        href: '#',
        priceMonthly: '$59',
        description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
        mostPopular: false,
    },
]
const sections = [
    {
        name: 'Features',
        features: [
            {name: 'Integrations', tiers: {Basic: true, Essential: true, Premium: true}},
            {name: 'Shared links', tiers: {Basic: true, Essential: true, Premium: true}},
            {name: 'Importing and exporting', tiers: {Essential: true, Premium: true}},
            {name: 'Team members', tiers: {Essential: 'Up to 20 users', Premium: 'Up to 50 users'}},
        ],
    },
    {
        name: 'Reporting',
        features: [
            {name: 'Advanced analytics', tiers: {Basic: true, Essential: true, Premium: true}},
            {name: 'Basic reports', tiers: {Essential: true, Premium: true}},
            {name: 'Professional reports', tiers: {Premium: true}},
            {name: 'Custom report builder', tiers: {Premium: true}},
        ],
    },
    {
        name: 'Support',
        features: [
            {name: '24/7 online support', tiers: {Basic: true, Essential: true, Premium: true}},
            {name: 'Quarterly product workshops', tiers: {Essential: true, Premium: true}},
            {name: 'Priority phone support', tiers: {Essential: true, Premium: true}},
            {name: '1:1 onboarding tour', tiers: {Premium: true}},
        ],
    },
]
</script>