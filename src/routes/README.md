# Zulu Routes

The routes directory contains all of Zentake's standalone pages. The decision to make each route a single file instead of a subdirectory is a conscious decision. The hope is that this will encourage a DRY-er code base. At all costs, custom, one-off components should be avoided in the web app. In almost all cases, there is a component that can be used from the UI sdk. In the rare event a custom component must be developed, place the component in `src/components/{{RouteName}}/`.

