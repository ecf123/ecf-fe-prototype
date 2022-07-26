# EFC- NIUE Handover Notes

# Folder Structure

The src folder contains the following:

Assets: each of the images used in the website is stored in the images folder. Variables and mixins files are kept in the Styles folder. The dummy data files are in the data folder and the video's used in the site are kept in the video folder.

Components: all of the website’s reusable UI components. Each of the components has its own folder with .jsx and .scss files within.

Containers: the files are either pages, or files that link together multiple components. Each of the containers has its own folder with .jsx and .scss files within.

Context: contains the authenticated user state which is passed to the rest of the website. The Firebase SDK is used to handle the authentication in this context file.

firebase.js: contains the firebase SDK config to setup authentication.

# App Features & Pages

# Outstanding Bugs

- The project is not connected to any back end so all of the data has been mocked.
- Only designed for a mobile view point.

# Resources

- [Live Site](https://ecf-future-hub.web.app/)
- [Github](https://github.com/nology-tech/niue-ecf)
- [Trello Board](https://trello.com/b/vXkrNAAj/ecf)
- [Wireframes](https://www.figma.com/file/ImHUEmoFd2UP7xDi1WKHCe/ECF---Future-Hub?node-id=376%3A644)
- [Component Tree](https://app.mural.co/invitation/mural/niueclientproject8578/1656342195507?sender=u0be897b7931cfb00fb096975&key=3719cda3-f1d6-40b9-9d69-4a52d3cc588d)
