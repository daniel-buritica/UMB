package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.customerpostgresql.helper;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ECountry {

    ARGENTINA(1, "001", "Argentina"),
    BOLIVIA(2, "002", "Bolivia"),
    BRASIL(3, "003", "Brasil"),
    CHILE(4, "004", "Chile"),
    COLOMBIA(5, "005", "Colombia"),
    COSTA_RICA(6, "006", "Costa Rica"),
    CUBA(7, "007", "Cuba"),
    ECUADOR(8, "008", "Ecuador"),
    EL_SALVADOR(9, "009", "El Salvador"),
    GUATEMALA(10, "010", "Guatemala"),
    HAITI(11, "011", "Haiti"),
    HONDURAS(12, "012", "Honduras"),
    JAMAICA(13, "013", "Jamaica"),
    MEXICO(14, "014", "Mexico"),
    NICARAGUA(15, "015", "Nicaragua"),
    PANAMA(16, "016", "Panama"),
    PARAGUAY(17, "017", "Paraguay"),
    PERU(18, "018", "Peru"),
    PUERTO_RICO(19, "019", "Puerto Rico"),
    REPUBLICA_DOMINICANA(20, "020", "Republica Dominicana"),
    URUGUAY(21, "021", "Uruguay"),
    VENEZUELA(22, "022", "Venezuela");

    private int id;
    private String iso;
    private String country;
}
