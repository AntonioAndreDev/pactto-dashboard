<template>
	<TransitionRoot as="template" :show="isOpen">
		<Dialog class="relative z-50" @close="closeModal">
			<TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
							 leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 bg-black  bg-opacity-75 transition-opacity"/>
			</TransitionChild>

			<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<TransitionChild as="template" enter="ease-out duration-300"
									 enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
									 enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
									 leave-from="opacity-100 translate-y-0 sm:scale-100"
									 leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
						<DialogPanel
							class="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
							<div class="bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
								<div class="sm:flex sm:items-start">
									<div
										class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
										<ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true"/>
									</div>
									<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
										<DialogTitle as="h3" class="text-base font-semibold leading-6 text-white">
											{{ title }}
										</DialogTitle>
										<div class="mt-2">
											<p class="text-sm text-white/75">{{ description }}.</p>
										</div>
									</div>
								</div>
							</div>
							<div class="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
								<Button type="button"
										class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
										@click="action">{{ mainBtnText }}
								</Button>
								<Button type="button"
										class="mt-3 inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:text-black sm:mt-0 sm:w-auto"
										@click="closeModal" ref="cancelButtonRef">{{ subBtnText }}
								</Button>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup lang="ts">
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {ExclamationTriangleIcon} from '@heroicons/vue/24/outline'
import {Button} from "@/components/ui/button";

defineProps({
	isOpen: Boolean,
	mainBtnText: String,
	subBtnText: String,
	title: String,
	description: String
})

const emits = defineEmits(['update:isOpen', 'action'])

const closeModal = () => {
	emits('update:isOpen', false)
}

const action = () => {
	emits('action')
}
</script>