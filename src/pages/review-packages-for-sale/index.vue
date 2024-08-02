<template>
	<DashboardLayout>
		<header class="flex justify-between">
			<Button class="uppercase font-semibold flex gap-x-2 text-black">
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
	</DashboardLayout>
</template>

<script setup lang="ts">

import DashboardLayout from "@/components/layouts/DashboardLayout.vue";
import {Button} from "@/components/ui/button";
</script>

<style scoped>

</style>