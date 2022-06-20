
# kW2.0 Demo

Application to demonstrate kunstWerk2.0

It utilizes the Angular6 plugin

It utilizes Themeforest's Fuse template.

It interfaces with Google's Firebase cloud service.

It has a lot of complexity built into it.

One of the difficulties in SPA development is in state change ordering. There is a setting in /src/assets/bootstrap.json called "trace/bState".  If you set this to true, you will see the states as they change in the order as they change.  This allows one  to see the "flow " of the application.  It is extremely useful for debugging and understanding.

The framework allows one to create CRUD functionality with 0 Code.

It also allows one to create complex applicaon via json file definitions.

Currently, the code is set up to load all bootstrap data from json files.  However the logic is in place to allow most bootstrap data to be updated via Ajax calls.  This means that bootstrap data could be stored in a SQL database and updated from an admin portal.  This functionality could also be exposed to the customer, to allow a certain level of customization.  (i.e. right now we are loading the available timezones, currencies and languages. )

It will transform data types.  i.e. in MySQL, a boolean is returned as number.  If you code the model as a true boolean, it will automatically convert the number to boolean.  And it will try to force it.  Lets say it comes back as a string, the framework will try to convert it to a boolean anyways.  And the same thing goes for sending data to the server. And if finally it is unable to convert it. It will tell you.


kW2.0 utilizes a strategy where the code is architected in such as way, as it tells you what you need to do next.  The architecture is "aware".   The code tells you what you need to do.  Very similar to test-driven design, but it is embedded in the "live" architecture.

As an example, if you add controllers and services for a new API and you start the application, you will see errors in Chrome's dev console. i.e:

dlAssocCtrlApi ::load() api for [ associate ] is not provided.

What this is telling you is that the "associate" API is coded, but there does not exist an entry in the Apis.json file for it yet.  It still needs to be added. You may see similar messages refering to missing "mdls" and missing "views".

It does not completely eradicate the need for tests, but it does provide a high level of certainty as to the quality of the code.  For complex algorithmic code unit tests should be done, but really only in that case.  It does strongly lessen the need to write unit tests for the apis - particularly when resources or time do not allow it.

If you look at the code in the App folder, you will see many folders and files, however, there is very little code in those files.  They are simply gluing the states and services together.  There is not much coding taking place because most of the code is in kWng.  The process is essentially a simple automatic process of copying, pasting and renaming.  In the near future a CLI will be created to handle. Study the state folders and you will see this very clearly.  The comp folder will also look like this

Views are first created specifically in terms of the API calls. Again this is done to ensure that The APIs work - for ease of testing. There is very little code in those files.  They are simply gluing the states and services to the views.  The strategy used is to create a view for each API with three different components: the create view, the update view and the full display view.  These are the visual lego bricks.  Once these bricks are created, specific views can then be built from these blocks. (i.e. a creation wizard)  In the near future a CLI will be created to create these components.


#Install git
goto 'https://gitforwindows.org/'

#Install nodejs
goto 'https://nodejs.org/en/download/'

#Install Angular Cli. 
run 'npm install -g @angular/cli'

#Install dependencies. 
run 'npm install'

## Run locally - make sure node version is 8.12.0
run 'ng s`

# Node memory limit issue - increases memory to 4GB
run 'export NODE_OPTIONS=--max_old_space_size=4096'

## Build Docker base image
run `./baseBuild.sh`

## Build Docker image
run `./build.sh`

## Run Docker image
run `./run.sh`

##debug app while in container
run `./debug.sh`

##node-saas problem
exit docker
run `npm rebuild node-sass --force`
run `./run.sh`
This should resolve it

##build release while in container
run `./release.sh`

##To clear all docker artifacts
run `./erase.sh`

##To view all docker artifacts
run `./view.sh`

##to rename files globally on linux (for me - I always forget)
run `rename s/oldname/newname/ *`

##to rename files globally on linux - recursive
run `shopt -s globstar`
run `rename s/old/new/ **`

## to see files in subdirectories
run `find . -name "*.html" -type f`

# to delete files in subdirectories
run `find . -name "*.html" -type f -delete`

# to setup atom

 apm install atom-beautify prettier-atom  atom-transpose case-keep-replace change-case copy-path duplicate-line-or-selection editorconfig file-icons git-plus highlight-selected local-history project-manager related set-syntax sort-lines sublime-style-column-selection tab-foldername-index sync-settings toggle-quotes atom-wrap-in-tag atom-ternjs autoclose-html autocomplete-modules color-picker docblockr emmet emmet-jsx-css-modules es6-javascript js-hyperclick hyperclick pigments linter-eslint tree-view-copy-relative-path lodash-snippets language-babel react-es7-snippets atom-jest-snippets one-dark-ui dracula-theme atom-spotify2

 # Inotify increase
run `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf`
run `sudo sysctl -p`

#Switch between nodjs versions
npm install -g n

find /your/target/path/ -type f -exec rename 's/special/regular/' '{}' \;

#build production version
run 'ng build --prod'

#turn off auto import for intellij typescript
File | Settings | Editor | General | Auto Import
file | Settings | Editor | Code Stype | TypeScript | Imports
