# Server .env variables needed
PORT=5005
ORIGIN=http://localhost:5005
DB_REMOTE
SESS_SECRET
CLOUDINARY_NAME
CLOUDINARY_KEY
CLOUDINARY_SECRET
NODEMAILER_NAME 
NODEMAILER_KEY
NODEMAILER_SECRET

# Client .env variables needed
REACT_APP_API_URL=http://localhost:5005/api


A brief description of what this project does and who it's for

| HTTP METHOD	| URL    	                | DESCRIPTION                                    
|---------------|---------------------------|----------------------------------------------
| GET         	| `/`             	        | Home page          	| |
| GET         	| `/registro`    	        | Displays a users form to Sign Up 	| |
| POST         	| `/registro`    	        | It creates a new user 	| |
| GET         	| `/inicio-sesion` 	        | Displays a form to Log In	| |
| POST         	| `/inicio-sesion` 	        | The user is logged in 	| |
| POST         	| `/cerrar-sesion` 	        | The user is logged out	|  ||X |
| GET         	| `/eventos`             	| Displays all events list         	| |
| GET         	| `/eventos/detalles/:id`   | Displays the event details 	| |
| GET         	| `/eventos/crear`    	    | It will creates an event through a form	| X|
| POST         	| `/eventos/crear`    	    | It saves the event in the DataBase	|X |
| GET         	| `/eventos/editar/:id` 	| The partners can edit their own events   	|X |
| POST         	| `/eventos/editar/:id` 	| The edited events are saved in the dataBase 	|X |
| POST         	| `/eventos/eliminar/:id` 	| It deletes the event	|X |
| GET         	| `/productos`             	| Displays all produtc list         	| |
| GET         	| `/productos/detalles/:id` | Displays the produtc details 	| |
| GET         	| `/productos/crear`    	| It will creates an product through a form	| X|
| POST         	| `/productos/crear`    	| It saves the product in the DataBase	|X |
| GET         	| `/productos/editar/:id` 	| The user can edit their own events   	|X |
| POST         	| `/productos/editar/:id` 	| The edited product are saved in the dataBase 	|X |
| POST         	| `/productos/eliminar/:id` | It deletes the product	|X |
| POST         	| `Api/contacto`            | contact page          	|X |



