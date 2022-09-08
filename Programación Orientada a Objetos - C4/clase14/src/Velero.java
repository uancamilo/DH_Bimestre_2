public class Velero extends Embarcacion {

   private Integer cantidadMastiles;
    public Velero(Capitan capitan, Double precioBase, Double valorAdicional, Integer anoFabricacion, Double eslora, Integer cantidadMastiles) {
        super(capitan, precioBase, valorAdicional, anoFabricacion, eslora);
        this.cantidadMastiles = cantidadMastiles;
    }

    public Boolean esGrande () {
        return cantidadMastiles > 4;
    }
}
