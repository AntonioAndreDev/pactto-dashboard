<template>
	<DashboardLayout>
		<header class="flex justify-between">
			<Button @click="showNewPackageToCreate = true" class="uppercase font-semibold flex gap-x-2 text-black">
				<iconify-icon
					class="text-xl"
					icon="lucide:plus"
				/>
				Add package
			</Button>
			<div class="flex gap-x-4">
				<Button disabled class="uppercase font-semibold text-black">Save changes</Button>
				<Button class="uppercase font-semibold text-black">Payment details</Button>
			</div>
		</header>
		<div v-show="showNewPackageToCreate" class="mt-12">
			<Button @click="isOpenModal = true" class="mb-4 flex gap-x-2" size="xs" variant="destructive">
				<iconify-icon
					class="text-xl"
					icon="bx:bx-trash"
				/>
				Delete package
			</Button>
			<div class="grid grid-cols-3 gap-6">
				<div class="flex flex-col gap-y-4">
					<h6 class="text-lg font-medium">1. Describe your package</h6>
					<p>Users will see this info on your expert page
						or in your integrations, view example.
					</p>

					<div class="flex flex-col gap-y-1">
						<label class="font-medium">Package name</label>
						<Input type="text" placeholder="Title"/>
					</div>

					<div class="flex flex-col gap-y-1">
						<label class="font-medium">Package description</label>
						<Input type="text" placeholder="Description"/>
					</div>

					<div class="flex flex-col gap-y-1">
						<label class="font-medium">Package details (user will view only)</label>
						<Input type="text" placeholder="Add details"/>
					</div>

					<div class="flex flex-col gap-y-1">
						<label class="font-medium">Package instructions (customers will view too)</label>
						<Input type="text" placeholder="Add instructions"/>
					</div>
				</div>

				<div class="flex flex-col gap-y-4">
					<h6 class="text-lg font-medium">2. Define requirements for your package</h6>
					<p>
						Users will be able to upload items for you to review.
						The items can be files, links or combinations.
					</p>

					<div class="flex flex-col gap-y-1">
						<label class="font-medium">Review type</label>
						<RadioGroup default-value="single-file-video">
							<div class="flex items-center space-x-2">
								<RadioGroupItem id="single-file-video" value="single-file-video"/>
								<Label for="single-file-video">Single file review (e.g. video, image, or PDF)</Label>
							</div>
							<div class="flex items-center space-x-2">
								<RadioGroupItem id="single-file-url" value="single-file-url"/>
								<Label for="single-file-url">Single link review (e.g. LinkedIn URL, portfolio)</Label>
							</div>
							<div class="flex items-center space-x-2">
								<RadioGroupItem disabled id="single-review" value="single-review"/>
								<Label for="single-review">Single review of multiple files (e.g. 2 videos and 1 image,
									reviewed
									together)</Label>
							</div>
						</RadioGroup>
					</div>

					<div class="flex flex-col gap-y-1">
						<label class="font-medium">Review file type</label>
						<RadioGroup default-value="video">
							<div class="flex items-center space-x-2">
								<RadioGroupItem id="video" value="video"/>
								<Label for="video">Video</Label>
							</div>
							<div class="flex items-center space-x-2">
								<RadioGroupItem id="image" value="image"/>
								<Label for="image">Image</Label>
							</div>
							<div class="flex items-center space-x-2">
								<RadioGroupItem id="file" value="file"/>
								<Label for="file">File (PDF, txt, etc)</Label>
							</div>
						</RadioGroup>
					</div>

					<div class="flex flex-col gap-y-1">
						<div>
							<label class="font-medium">Options for the user to select (tags) view example</label>
							<p class="text-sm">The user will be able to select these options when purchasing the
								package.
								They
								will
								become
								tags
								in your dashboard.</p>
						</div>
						<Input type="text" placeholder="Add option"/>
					</div>

					<div class="flex flex-col gap-y-1">
						<label class="font-medium">Package instructions (customers will view too)</label>
						<Input type="text" placeholder="Add instructions"/>
					</div>
				</div>

				<div class="flex flex-col gap-y-4">
					<h6 class="text-lg font-medium">3. Define its cost and number of reviews</h6>
					<p>
						Users will upload their items for you to review,
						and they pay your review fee.
					</p>

					<div class="flex justify-between gap-y-1">
						<label class="font-medium">Currency</label>
						<Select>
							<SelectTrigger class="w-[180px]">
								<SelectValue placeholder="USD"/>
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Select currency</SelectLabel>
									<SelectItem value="usd">
										USD
									</SelectItem>
									<SelectItem value="brl">
										BRL
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div class="flex justify-between gap-y-1">
						<label class="font-medium">Package cost</label>
						<NumberField id="price" :default-value="25" :min="25" :max="5000">
							<Label for="price">Price</Label>
							<NumberFieldContent class="w-[180px]">
								<NumberFieldDecrement/>
								<NumberFieldInput/>
								<NumberFieldIncrement/>
							</NumberFieldContent>
						</NumberField>
					</div>

					<p>
						This package can result in one single review,
						or it can be a specific number of reviews to
						be consumed as credits.
					</p>

					<div class="flex justify-between gap-y-1 gap-x-4">
						<div>
							<label class="font-medium">Number of reviews (credits) in this package</label>
							<p>View video explanation</p>
						</div>
						<NumberField id="credits" :default-value="1" :min="1" :max="1000">
							<Label for="credits">Credits</Label>
							<NumberFieldContent class="w-[180px]">
								<NumberFieldDecrement/>
								<NumberFieldInput/>
								<NumberFieldIncrement/>
							</NumberFieldContent>
						</NumberField>
					</div>

					<p>
						Users can see and buy your package
						when it’s published.
					</p>

					<Button class="uppercase text-black font-semibold">
						Publish package
					</Button>
				</div>

			</div>
		</div>
	</DashboardLayout>
	<!-- $event refere-se ao evento que foi declarado dentro da função closeModal do componente Modal.	-->
	<!--	por meio do emit-->
	<Modal :is-open="isOpenModal" @update:isOpen="isOpenModal = $event" @action="teste" title="Delete package?"
		   description="Are you sure you want to delete the package" sub-btn-text="No" main-btn-text="Yes"/>
</template>

<script setup lang="ts">

import DashboardLayout from "@/components/layouts/DashboardLayout.vue";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import {
	NumberField,
	NumberFieldContent,
	NumberFieldDecrement,
	NumberFieldIncrement,
	NumberFieldInput,
} from '@/components/ui/number-field'
import {ref} from "vue";
import Modal from "@/components/Modal.vue";

const showNewPackageToCreate = ref(false)
const isOpenModal = ref(false)

function teste() {
	isOpenModal.value = false
	showNewPackageToCreate.value = false
}
</script>

<style scoped>

</style>