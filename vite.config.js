import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/dayeonjungwook/',  // dayeonielle.github.io는 특수 레포, '/' 그대로
});
