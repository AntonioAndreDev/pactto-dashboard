<template>
    <DashboardLayout>
        <heading1>Personal Information</heading1>
        <AutoForm
            :field-config="{
                    firstName: {
                        label: 'First Name',
                        inputProps: {
                            placeholder: 'Your first name',
                            type: 'text'
                        }
                    },
                    lastName: {
                        label: 'Last name',
                        inputProps: {
                            placeholder: 'Your last name',
                            type: 'text'
                        }
                    },
                    email: {
						inputProps: {
							placeholder: 'Your email',
						}
                    },
					country: {
						component: 'select',
						inputProps: {
							placeholder: 'Your country',
						}
					},
					activitiesVideo: {
						label: 'Video',
						component: 'checkbox',
					},
					activitiesDesign: {
						label: 'Design',
						component: 'checkbox',
					},
					activitiesDevelopment: {
						label: 'Development',
						component: 'checkbox',
					},
					activitiesSports: {
						label: 'Sports',
						component: 'checkbox',
					},
					activitiesMedical: {
						label: 'Medical',
						component: 'checkbox',
					},
					activitiesInspections: {
						label: 'Inspections',
						component: 'checkbox',
					},
                }"
            class="space-y-6 mx-auto" :schema="schema" @submit="submit">
            <div class="relative">
                <div class="absolute inset-0 flex items-center">
                    <span class="w-full border-t"/>
                </div>
                <div class="relative flex justify-center text-xs uppercase">
                        <span class="bg-background px-2 text-muted-foreground">

                        </span>
                </div>
            </div>
            <Button variant="secondary" class="w-full" type="submit">
                Save changes
            </Button>
        </AutoForm>
    </DashboardLayout>
</template>

<script setup lang="ts">

import DashboardLayout from "@/components/layouts/DashboardLayout.vue";
import Heading1 from "@/components/headings/heading1.vue";
import {AutoForm} from "@/components/ui/auto-form";
import {z} from "zod"
import {countries} from "countries-list";
import {Button} from "@/components/ui/button";

const countryList = Object.values(countries).map(country => country.name) as [string, ...string[]];

const schema = z.object({
    firstName: z
        .string({
                required_error: 'You need to inform your first name.',
            }
        )
        .min(3, {
            message: 'First name needs to have at least 3 characters.'
        })
        .max(50, {
            message: 'First name needs to have at most 50 characters.'
        }),


    lastName: z
        .string({
            required_error: 'You need to inform your last name',
        })
        .min(3, {
            message: 'Last name needs to have at least 3 characters.'
        })
        .max(50, {
            message: 'Last name needs to have at most 50 characters.'
        }),

    email: z
        .string({
            required_error: 'You need to inform your email',
        })
        .email({
            message: 'You need to inform a valid email.'
        }),

    country: z
        .enum(countryList, {
            message: 'You need to inform a valid country.'
        }),

    activitiesVideo: z
        .boolean()
        .optional(),

    activitiesDesign: z
        .boolean()
        .optional(),

    activitiesDevelopment: z
        .boolean()
        .optional(),

    activitiesSports: z
        .boolean()
        .optional(),

    activitiesMedical: z
        .boolean()
        .optional(),

    activitiesInspections: z
        .boolean()
        .optional(),

    username: z
        .string({
            required_error: 'You need to inform your last name',
        })
        .min(3, {
            message: 'Last name needs to have at least 3 characters.'
        })
        .max(50, {
            message: 'Last name needs to have at most 50 characters.'
        }),

    password: z
        .string({
            required_error: 'You need to inform your last name',
        })
        .min(3, {
            message: 'Last name needs to have at least 3 characters.'
        })
        .max(50, {
            message: 'Last name needs to have at most 50 characters.'
        }),

    confirmPassword: z
        .string({
            required_error: 'You need to inform your last name',
        })
        .min(3, {
            message: 'Last name needs to have at least 3 characters.'
        })
        .max(50, {
            message: 'Last name needs to have at most 50 characters.'
        }),
})

function submit(values: Record<string, string>) {
    console.log(values);
}
</script>