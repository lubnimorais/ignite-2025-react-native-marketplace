import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

// Cria uma instância do FlatCompat para traduzir o formato antigo
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  // Traduz o 'eslint-config-expo' antigo para o Flat Config atualizado
  ...compat.extends('eslint-config-expo'),
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  configPrettier,
];
