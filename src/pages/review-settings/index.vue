<template>
	<DashboardLayout>
		<heading1>Review settings</heading1>
		<AutoForm
			:field-config="{
					showLogo: {
						label: 'Show logo',
						component: 'checkbox',
					},
					microphone: {
						label: ' Start with microphone enabled ',
						component: 'checkbox',
					},
					camera: {
						label: ' Start with camera enabled ',
						component: 'checkbox',
					},
					muted: {
						label: 'Videos loaded start muted ',
						component: 'checkbox',
					},
					notesOneSecond: {
						label: ' Notes disappear after 1 second ',
						component: 'checkbox',
					},
					pinchToZoom: {
						label: 'Trackpad: pinch to zoom ',
						component: 'checkbox',
					},
					twoFingerSwiper: {
						label: 'Trackpad: reposition with 2-finger swipe',
						component: 'checkbox',
					},
                }"
			class="space-y-6 mx-auto mt-4" :schema="schema" @submit="submit">
			<div class="flex items-center gap-x-4">
				<p>Brush size for tools ({{ brushSize }}px)</p>
				<Input class="w-32" type="range" min="1" max="7" v-model="brushSize"/>
			</div>
			<div class="flex gap-4">
				<div>
					<p>Color 1</p>
					<Input class="w-32" type="color"/>
				</div>
				<div>
					<p>Color 2</p>
					<Input default-value="#FF0000" class="w-32" type="color"/>
				</div>
				<div>
					<p>Color 3</p>
					<Input default-value="#FFFFFF" class="w-32" type="color"/>
				</div>
				<div>
					<p>Color 4</p>
					<Input default-value="#1F1F1F" class="w-32" type="color"/>
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<heading2>Devices</heading2>
				<div class="flex gap-4">
					<Select>
						<SelectTrigger class="w-[180px] font-semibold">
							<SelectValue placeholder="Camera"/>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Camera</SelectLabel>
								<SelectItem class="cursor-pointer" value="windows">
									Cam 1
								</SelectItem>
								<SelectItem class="cursor-pointer" value="mac">
									Cam 2
								</SelectItem>
								<SelectItem class="cursor-pointer" value="android">
									Cam 3
								</SelectItem>
								<SelectItem class="cursor-pointer" value="ios">
									Cam 4
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>

					<Select>
						<SelectTrigger class="w-[180px] font-semibold">
							<SelectValue placeholder="Microphone"/>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Microphone</SelectLabel>
								<SelectItem class="cursor-pointer" value="windows">
									Mic 1
								</SelectItem>
								<SelectItem class="cursor-pointer" value="mac">
									Mic 2
								</SelectItem>
								<SelectItem class="cursor-pointer" value="android">
									Mic 3
								</SelectItem>
								<SelectItem class="cursor-pointer" value="ios">
									Mic 4
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
			<Button variant="secondary" class="w-full" type="submit">
				Salvar alterações
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
import {Input} from "@/components/ui/input";
import {ref} from "vue";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import Heading2 from "@/components/headings/heading2.vue";

const brushSize = ref()


const schema = z.object({
	showLogo: z
		.boolean()
		.optional(),

	microphone: z
		.boolean()
		.optional(),

	camera: z
		.boolean()
		.optional(),

	muted: z
		.boolean()
		.optional(),

	notesOneSecond: z
		.boolean()
		.optional(),

	pinchToZoom: z
		.boolean()
		.optional(),

	twoFingerSwiper: z
		.boolean()
		.optional(),
})

function submit(values: Record<string, string>) {
	console.log(values);
}
</script>