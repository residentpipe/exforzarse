package negocio.impl;

import dto.PersonDTO;
import negocio.IPersonaNegocio;
import util.PersisUtil;

import java.sql.Connection;

import javax.sql.DataSource;

import dao.person.IPersonDAO;
import dao.person.jdbc.PersonDAO;

public class PersonaNegocio implements IPersonaNegocio {
	
	private IPersonDAO personDAO;
	private DataSource dataSource;
	
	public PersonaNegocio(){
		dataSource = PersisUtil.getDataSource();
		personDAO = new PersonDAO();
	}

	@Override
	public String agregarPersona(PersonDTO persona) {
		Connection con = null;
		String message="";
		try {
			con = dataSource.getConnection();
			message = personDAO.agregarPersona(persona, con);
		} catch (Exception e) {
			System.out.println(e.toString());
		} finally {
			PersisUtil.closeConnection(con);
		}
		return message;
	}

}
