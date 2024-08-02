<template>
	<DashboardLayout>
		<header class="mb-4 flex justify-between">
			<heading1>Pactto website</heading1>
			<Button class="uppercase text-black font-semibold">Save Changes</Button>
		</header>
		<div class="grid grid-cols-2 gap-6">
			<div class="flex flex-col gap-y-4">
				<div class="flex flex-col gap-y-1.5">
					<Label>Hero</Label>
					<Input placeholder="Public name" required type="text"/>
					<Input placeholder="Headline" required type="text"/>
				</div>

				<div class="flex flex-col gap-y-1.5">
					<Label>About me</Label>
					<Input placeholder="About me" required type="text"/>
				</div>

				<div class="flex flex-col gap-y-1.5">
					<Label>Expertise Title</Label>
					<Input placeholder="Add a title" required type="text"/>
				</div>

				<div class="flex flex-col gap-y-1.5">
					<Label>Expertise</Label>
					<Input placeholder="Add an expertise" required type="text"/>
				</div>

				<div class="flex flex-col gap-y-1.5">
					<Label>Award Title</Label>
					<Input placeholder="Add a title" required type="text"/>
				</div>

				<div class="flex flex-col gap-y-1.5">
					<Label>Expertise</Label>
					<Input placeholder="Add an award" required type="text"/>
				</div>

				<div class="flex flex-col gap-y-1.5">
					<Label>Give me a follow</Label>
					<Input placeholder="Add social media channel" required type="text"/>
				</div>

				<div class="flex flex-col gap-y-1.5">
					<Label>Youtube Video</Label>
					<Input placeholder="Youtube video URL" required type="text"/>
				</div>

				<div class="flex flex-col gap-y-1.5">
					<Label>Footer</Label>
					<Input placeholder="Quote" required type="text"/>
					<Input placeholder="Quote author" required type="text"/>
				</div>
			</div>

			<div>
				<Label>Avatar</Label>
				<div class="bg-custom-secondary-gray/50 h-48 flex justify-center items-center">
					<img src="https://via.placeholder.com/150" alt="avatar" class="h-36 w-36 rounded-full"/>
				</div>
				<Button @click="open" type="button" class="w-full text-black mt-4 font-semibold">
					Change avatar
				</Button>
			</div>

		</div>
	</DashboardLayout>
</template>

<script setup lang="ts">

import DashboardLayout from "@/components/layouts/DashboardLayout.vue";
import Heading1 from "@/components/headings/heading1.vue";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useFileDialog} from '@vueuse/core'

const {files, open, reset, onChange} = useFileDialog({
	accept: '*',
	multiple: false,
})

onChange((files) => {
	console.log(files)
})
</script>
