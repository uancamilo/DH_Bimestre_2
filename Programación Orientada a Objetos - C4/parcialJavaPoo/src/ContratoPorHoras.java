public class ContratoPorHoras  extends Contrato implements Comparable {
    private Integer horasTrabajadas;
    private Double valorHora;

    public ContratoPorHoras(Integer duracion, Integer fechaInicio, Boolean selloMinisterio, Integer horasTrabajadas, Double valorHora) {
        super(duracion, fechaInicio, selloMinisterio);
        this.horasTrabajadas = horasTrabajadas;
        this.valorHora = valorHora;
    }

    @Override

    public int compareTo(Object o) {
       ContratoPorHoras otrosContratos = (ContratoPorHoras) o;

        if(this.horasTrabajadas > otrosContratos.horasTrabajadas){
            return 1;
        }
        if (this.horasTrabajadas < otrosContratos.horasTrabajadas){
            return -1;
        }
        return 0;
    }
}
