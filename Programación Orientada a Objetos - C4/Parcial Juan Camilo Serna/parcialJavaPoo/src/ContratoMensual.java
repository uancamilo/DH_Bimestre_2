public class ContratoMensual extends Contrato {
    private Double salarioMensual;
    private Double horasTotales;
    private String cargo;

    public ContratoMensual(Integer duracion, Integer fechaInicio, Boolean selloMinisterio, Double salarioMensual, Double horasTotales, String cargo) {
        super(duracion, fechaInicio, selloMinisterio);
        this.salarioMensual = salarioMensual;
        this.horasTotales = horasTotales;
        this.cargo = cargo;
    }

    public Boolean tipoEmpleado(){

        if (cargo == "Jefe") {
            return true;
        } else {
            return false;
        }

    }

}
