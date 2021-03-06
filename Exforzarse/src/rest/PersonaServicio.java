package rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import dto.PersonDTO;
import negocio.IPersonaNegocio;
import negocio.impl.PersonaNegocio;


@Path("/personaServicio")
public class PersonaServicio {
	
	
	private IPersonaNegocio personaNegocio;

	public PersonaServicio(){
		personaNegocio = new PersonaNegocio();
	}
	
	@PUT
	@Path("/agregarPersona")
	@Consumes (MediaType.APPLICATION_JSON)
	@Produces (MediaType.TEXT_PLAIN)
	public String agregarPersona(PersonDTO person){
		return personaNegocio.agregarPersona(person);
	}
}
