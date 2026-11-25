import { access, cp, rm } from 'node:fs/promises';

const source = new URL('../src/', import.meta.url);
const output = new URL('../public/', import.meta.url);

await Promise.all(['index.html', 'support.html', 'privacy-policy.html', 'terms-of-use.html', 'delete-account.html', 'app-privacy-policy.html', 'app-terms-of-service.html']
  .map(file => access(new URL(file, source))));
await rm(output, { recursive: true, force: true });
await cp(source, output, { recursive: true });
