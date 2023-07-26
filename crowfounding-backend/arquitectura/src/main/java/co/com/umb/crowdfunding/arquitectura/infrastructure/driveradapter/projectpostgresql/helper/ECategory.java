package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.projectpostgresql.helper;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ECategory {

    FIN_DE_LA_PROBREZA(1,"Fin de la pobreza", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-1.png"),
    HAMBRE_CERO(2, "Hambre cero", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-2.png"),
    SALUD_Y_BIENESTAR(3, "Salud y bienestar", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-3.png"),
    EDUCACION_DE_CALIDAD(4, "Educación de calidad", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-4.png"),
    IGUALDAD_DE_GENERO(5, "Igualdad de género", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-5.png"),
    AGUA_LIMPIA_Y_SANEAMIENTO(6, "Agua limpia y saneamiento", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-6.png"),
    ENERGIA_ASEQUIBLE_Y_NO_CONTAMINANTE(7, "Energía asequible y no contaminante", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-7.png"),
    TRABAJO_DECENTE_Y_CRECIMIENTO_ECONOMICO(8, "Trabajo decente y crecimiento económico", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-8.png"),
    INDUSTRIA_INNOVACION_E_INFRAESTRUCTURA(9, "Industria, innovación e infraestructura", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-9.png"),
    REDUCCION_DE_LAS_DESIGUALDADES(10, "Reducción de las desigualdades", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-10.png"),
    CIUDADES_Y_COMUNIDADES_SOSTENIBLES(11, "Ciudades y comunidades sostenibles", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-11.png"),
    PRODUCCION_Y_CONSUMO_RESPONSABLES(12, "Producción y consumo responsables", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-12.png"),
    ACCION_POR_EL_CLIMA(13, "Acción por el clima", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-13.png"),
    VIDA_SUBMARINA(14, "Vida submarina", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-14.png"),
    VIDA_DE_ECOSISTEMAS_TERRESTRES(15, "Vida de ecosistemas terrestres", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-15.png"),
    PAZ_JUSTICIA_E_INSTITUCIONES_SOLIDAS(16, "Paz, justicia e instituciones sólidas", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-16.png"),
    ALIANZAS_PARA_LOGRAR_LOS_OBJETIVOS(17, "Alianzas para lograr los objetivos", ""
            ,"https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-17.png");



    private int id;
    private String type;
    private String description;
    private String imageCategory;
}
