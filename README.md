### Prerequisites

You're going to need
* npm
* nodejs
* Angular

You can install Angular with this command:
```
npm install -g @angular/cli@10.0.5 
```

**Angular is not needed if you are only doing changes to WebRTCAppEE**
**Skip to "how to package the build files" if no changes to the root folder**
  
### Installation


1. Clone the repo. If using the CLI, make sure you have an SSH key set up(or, better yet, a private key) or simply log in with Github Desktop.
   ```sh
   git clone https://github.com/ImencoAS/ims-vms-management-console
   ```
2. Install NPM packages inside the cloned repository
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## Usage

To run the web interface locally, use this command:

```sh
  ng serve
```

You might want to update the endpoint to a server running Ant Media Server to be able to login.
That is done in: TBA

To build the project, use this command:

```sh
  ng build
```

To package the build files, use this command:

```sh
  npm run package
```

This will create a .zip file that can be uploaded as a release to GitHub 

Info about CSS. CSS is handled by GULP, wich you can read more about here: https://gulpjs.com/
