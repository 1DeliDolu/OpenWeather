import { test, expect } from '@grafana/plugin-e2e';

test('smoke: should render query editor', async ({ panelEditPage, readProvisionedDataSource }) => {
  const ds = await readProvisionedDataSource({ fileName: 'datasources.yml' });
  await panelEditPage.datasource.set(ds.name);
  await expect(
    panelEditPage.getQueryEditorRow('A').getByPlaceholder('Enter city name (e.g., London,uk)')
  ).toBeVisible();
});

test('should trigger new query when City is changed', async ({ panelEditPage, readProvisionedDataSource }) => {
  const ds = await readProvisionedDataSource({ fileName: 'datasources.yml' });
  await panelEditPage.datasource.set(ds.name);
  const queryReq = panelEditPage.waitForQueryDataRequest();
  await panelEditPage
    .getQueryEditorRow('A')
    .getByPlaceholder('Enter city name (e.g., London,uk)')
    .fill('Istanbul,tr');
  await expect(await queryReq).toBeTruthy();
});

test('should show Units selector', async ({ panelEditPage, readProvisionedDataSource }) => {
  const ds = await readProvisionedDataSource({ fileName: 'datasources.yml' });
  await panelEditPage.datasource.set(ds.name);
  await expect(panelEditPage.getQueryEditorRow('A').getByText('Units')).toBeVisible();
});
