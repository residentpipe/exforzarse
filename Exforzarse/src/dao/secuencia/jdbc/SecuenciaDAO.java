package dao.secuencia.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import dao.secuencia.ISecuenciaDAO;
import util.PersisUtil;

public class SecuenciaDAO implements ISecuenciaDAO {

	@Override
	public Integer obtenerConsecutivo(String nombreSecuencia, Connection con) throws Exception {
		Integer consecutivo = 0;
        String query;
        PreparedStatement instruccion = null;
        ResultSet resultado = null;
        try {
            query = "SELECT nextval('"+nombreSecuencia+"')";
            instruccion = con.prepareStatement(query);
            resultado = instruccion.executeQuery();
            while (resultado.next()) {
               consecutivo = resultado.getInt("nextval");
            }
        } finally {
            PersisUtil.closeResources(instruccion);
        }
        return consecutivo;
	}

}
