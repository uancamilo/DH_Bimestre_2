public class Main {
    public static void main(String[] args) {

        ContratoPorHoras contratoPorHoras = new ContratoPorHoras(12,12,false,20,50.0);

        System.out.println(contratoPorHoras.puedeTrabajar());


        ContratoMensual esjefe = new ContratoMensual ( 12, 5, true, 400.0,48.0, "Jefe");

        System.out.println(esjefe.tipoEmpleado());


        System.out.println(contratoPorHoras.compareTo(contratoPorHoras));

    }
}