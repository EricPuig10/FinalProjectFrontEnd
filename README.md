FACTORIA F5 APP
============

## TABLE OF CONTENTS
1. [GENERAL INFO](#GENERAL-INFO)
2. [STACK](#STACK)
3. [INSTALLATION](#INSTALLATION_)
4. [NEXT](#NEXT)

***
&nbsp;

## PROJECT LINKS

>[Front-End](https://github.com/EricPuig10/FinalProjectFrontEnd.git)</br>
>[Back-End](https://github.com/EricPuig10/FinalProjectBackEnd.git)

&nbsp;

## GENERAL INFO

SPA for candidates management of Factoria F5 using a Rest API that includes JWT-Auth.

&nbsp;

### OBJECTIVES

This app wants to improve the candidates selection process for the bootamps in Factoria F5, to achieve a more efficient and effective control of this task.

The authorized users can make a CRUD of Candidates & Bootmaps. And also filter the candidates by bootcamp o by process state.

The Master Admin can create new users too.

App developed in 4 weeks.

&nbsp;

### USER STORIES
1. As an Auth User I want to get a list of candidates and make a crud. I want to open a candidat card to manage the information.
2. As an Auth User I want to get a list of bootcamps and make a crud. I want to open a bootcamp card to manage the information.
3. As an Auth User I want to get a list of Process State and filter each step of the process with the candidates.
4. As an Auth User I want to filter the candidates by bootcamp and by process state.
5. As a Master Administrator I want to create new users from Factoria F5.

&nbsp;

## IU DESIGN

![FACTORIA_MACKBOOK_HOME_](https://user-images.githubusercontent.com/102957525/192257975-eefb9c63-2f73-4d35-8471-3765172fa55c.png)

![FACTORIA_MACKBOOK_LOGIN](https://user-images.githubusercontent.com/102957525/192258182-1b84f26b-49c0-4ef6-b961-92eca4d1e839.png)

![FACTORIA_MACKBOOK_TABLACANDIDATOS](https://user-images.githubusercontent.com/102957525/192258216-91746a09-fdbc-4dcc-81f8-99764d432d83.png)

&nbsp;

## STACK
- Visual Studio Code
- HTML 5
- CSS 3
- JavaScript ES6
- React
- React router DOM
- Material UI
- Styled Components
- Axios
- Jest

&nbsp;

## INSTALLATION

We started the project creating a React App so node.js is required. Once you have verified that node is already installed in your directory, just execute the following steps: Este proyecto fue arrancado con Create React App por lo tanto requiere node.js y npm. Una vez que hayas verificado que node está instalado en tu directorio, sigue los siguientes pasos:

1. Clone the repository with the following command:  
```
git clone https://github.com/EricPuig10/FinalProjectFrontEnd
```

2. Run the app on development mode

```
npm install
```

3. For the front-end correct working, you must also clone de back-end repository:

```
git clone https://github.com/EricPuig10/FinalProjectBackEnd
```

### Running App
>npm start

### Running Test
>npm run test

&nbsp;

## WHAT'S NEXT?

>SECURITY: When Master Administrator creates a new user, the automatic generation of an e-mail must redirection to the password change site, before accessing the app.

>LOADING: When a new candidat registers by himself, the auto-genereted excel will be imported to the data base.

>FLEXIBILITY: The application will be adaptable to be able to add more options to the preset fields.

&nbsp;

## THANKS TO
Factoria F5 (especially to our stakeholder) for ordering this project & to our trainers for accompanying us throughout the bootcamp journey.
Also thanks to all the bookcampmates for the shared hours.

&nbsp;

## TEAM

[Eric Puigvendrello ](https://github.com/EricPuig10)<br>
[Natàlia Boya ](https://github.com/nboyaroca)<br>
[Joan Gil ](https://github.com/jilbosch)<br>
[Laura Castillo ](https://github.com/laucasdu)<br>