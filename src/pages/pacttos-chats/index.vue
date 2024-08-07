<template>
	<DashboardLayout>
		<div class="flex flex-col gap-y-4">
			<heading1>Pacttos (Chats)</heading1>
			<div class="relative h-fit w-full">
				<iconify-icon
					class="absolute top-[50%] translate-y-[-50%] left-2.5 text-muted-foreground"
					icon="lucide:search"
				></iconify-icon>
				<Input class="w-full pl-8" type="text" placeholder="Search ..."/>
			</div>
		</div>
	</DashboardLayout>
</template>

<script setup lang="ts">

import DashboardLayout from "@/components/layouts/DashboardLayout.vue";
import Heading1 from "@/components/headings/heading1.vue";
import {Input} from "@/components/ui/input";
</script>

<style scoped>

</style>