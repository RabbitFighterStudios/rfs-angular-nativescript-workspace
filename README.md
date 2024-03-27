# RFS Angular/Nativescript Workspace

Workspace meant to house projects that relate to MIDI and software/hardware design, development, and integration, but for now, expploring the initial challenge of getting the best out of Angular 17+ and the native requirements and features from NativeScript, while having a reliable and accurate state management system in NgRx, as well as deployment and CI/CD options. For now it is just a miracle to get this all set up and running. Will update as I go.

## Initial POC ScreenshotScreenshots

### iPhone 15 Pro Max (iOS 17.0)

![iOS](https://imgur.com/gT4YWyU.png)

### Pixel 6 Pro (API 30)

![Android](https://imgur.com/yQ3yXAs.png)

## IPad Pro (12.9-inch iOS 17.0)

![IPadPro](https://imgur.com/DgtnFca.png)

## Tech Stack and reasoning

A combination of Angular 17+ with NativeScript 8+ alongside NgRx state management proves invaluable, offering a robust set of features tailored to meet a serious development team's needs.

My approach involves harnessing Angular’s Dependency Injection (DI), expressive directives, control flow templating, and reactive view bindings to seamlessly integrate with iOS CoreMIDI (to start) using NativeScript, thereby actualizing the UI and advanced functionalities. I also plan to use other NativeScript UI Components via the SwiftUI library and others.

## Tech Stack:

Below is a list of eventual technologies that will be explored:

- **Tailwind CSS**: Utilized for styling platform-optimized views via NativeScript.
- **State Management**: Implemented using NgRx 17.x.
- **SQLite**: Employed for local offline database functionalities.
- **Supabase**: Utilized for remote syncable database operations.
- **Mobile UI Testing**: Conducted with Maestro.

## Nx plugins and code generators

These are just examples...

Add Nx plugins to leverage their code generators and automated, inferred tasks.

```
# Add plugin
npx nx add @nx/react

# Use code generator
npx nx generate @nx/react:app demo

# Run development server
npx nx serve demo

# View project details
npx nx show project demo --web
```

Run `npx nx list` to get a list of available plugins and whether they have generators. Then run `npx nx list <plugin-name>` to see what generators are available.

Learn more about [code generators](https://nx.dev/features/generate-code) and [inferred tasks](https://nx.dev/concepts/inferred-tasks) in the docs.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)
