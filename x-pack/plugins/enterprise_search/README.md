# Enterprise Search

## Overview

This plugin's goal is to provide a Kibana user interface to the Enterprise Search solution's products (App Search and Workplace Search). In it's current MVP state, the plugin provides the following with the goal of gathering user feedback and raising product awareness:

- **App Search:** A basic engines overview with links into the product.
- **Workplace Search:** A simple app overview with basic statistics, links to the sources, users (if standard auth), and product settings.

## Development

1. When developing locally, Enterprise Search should be running locally alongside Kibana on `localhost:3002`.
2. Update `config/kibana.dev.yml` with `enterpriseSearch.host: 'http://localhost:3002'`
3. For faster QA/development, run Enterprise Search on [elasticsearch-native auth](https://www.elastic.co/guide/en/app-search/current/security-and-users.html#app-search-self-managed-security-and-user-management-elasticsearch-native-realm) and log in as the `elastic` superuser on Kibana.

### Kea

Enterprise Search uses [Kea.js](https://github.com/keajs/kea) to manage our React/Redux state for us. Kea state is handled in our `*Logic` files and exposes [values](https://kea.js.org/docs/guide/concepts#values) and [actions](https://kea.js.org/docs/guide/concepts#actions) for our components to get and set state with.

#### Advanced Kea usage

For the most part, we stick to the functionality described in Kea's [core concepts](https://kea.js.org/docs/guide/concepts). However, in some files, we also take advantage of [props](https://kea.js.org/docs/guide/additional#props) and [events](https://kea.js.org/docs/guide/additional#events), as well as [manually mounting](https://kea.js.org/docs/guide/advanced#mounting-and-unmounting) some shared logic files on plugin init outside of React.

#### Debugging Kea

To debug Kea state in-browser, Kea recommends [Redux Devtools](https://kea.js.org/docs/guide/debugging). To facilitate debugging, we use the [path](https://kea.js.org/docs/guide/debugging/#setting-the-path-manually) key with `snake_case`d paths. The path key should always end with the logic filename (e.g. `['enterprise_search', 'some_logic']`) to make it easy for devs to quickly find/jump to files via IDE tooling.

## Testing

### Unit tests

Documentation: https://www.elastic.co/guide/en/kibana/current/development-tests.html#_unit_testing

Jest tests can be run directly from the `x-pack/plugins/enterprise_search` folder. This also works for any subfolders or subcomponents.

```bash
yarn test:jest
yarn test:jest --watch
```

Unfortunately coverage collection does not work as automatically, and requires using our handy jest.sh script if you want to run tests on a specific file or folder and only get coverage numbers for that file or folder:

```bash
# Running the jest.sh script from the `x-pack/plugins/enterprise_search` folder (vs. kibana root)
# will save you time and allow you to Tab to complete folder dir names
sh jest.sh {YOUR_COMPONENT_DIR}
sh jest.sh public/applications/shared/kibana
sh jest.sh server/routes/app_search
# When testing an individual file, remember to pass the path of the test file, not the source file.
sh jest.sh public/applications/shared/flash_messages/flash_messages_logic.test.ts
```

### E2E tests

See [our functional test runner README](../../test/functional_enterprise_search).
