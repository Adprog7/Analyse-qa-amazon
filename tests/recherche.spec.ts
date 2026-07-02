import { test, expect } from '@playwright/test';

test('recherche un produit et vérifie les résultats', async ({ page }) => {
  // 1. Aller sur le site
  await page.goto('https://amazon.fr'); 
  
  // 2. Taper "ordinateur" dans la barre de recherche
  await page.fill('#twotabsearchtextbox', 'ordinateur');
  await page.press('#twotabsearchtextbox', 'Enter');
  
  // 3. Vérifier que la page de résultats contient au moins un élément
  const results = page.locator('.s-result-item');
  await expect(results.first()).toBeVisible();
});