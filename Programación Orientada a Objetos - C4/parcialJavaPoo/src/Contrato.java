public abstract class Contrato {
    private Integer duracion;
    private Integer fechaInicio;
    private Boolean selloMinisterio;

    public Contrato(Integer duracion, Integer fechaInicio, Boolean selloMinisterio) {
        this.duracion = duracion;
        this.fechaInicio = fechaInicio;
        this.selloMinisterio = selloMinisterio;
    }

    public String puedeTrabajar() {
        if(selloMinisterio == true) {
            return "Puede trabajar";
        } else {
            return "No puede trabajar";
        }
    }
}
