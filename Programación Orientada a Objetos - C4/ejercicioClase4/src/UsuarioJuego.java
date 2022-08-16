public class UsuarioJuego {

    // ATRIBUTOS

    private String nombre ;
    private String clave;
    private  Double puntaje;
    private  Integer nivel;

    //CONSTRUCTOR

    public UsuarioJuego(String nombre, String clave){
        this.nombre = nombre;
        this.clave = clave;
        this.puntaje = 0.0;
        this.nivel = 0;
    }

    //METODO

    public void aumentaPuntaje() {

        this.puntaje++; //aumentar puntaje
         System.out.println("Nuevo puntaje " + puntaje);
    }


    public void subirNivel() {
        this.nivel++;
        System.out.println("estas en el nivel " + nivel);
    }

    public void bonus (Double puntos){
        this.puntaje += puntos;
        System.out.println("tu nuevo puntaje es " + puntaje);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public Double getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(Double puntaje) {
        this.puntaje = puntaje;
    }

    public Integer getNivel() {
        return nivel;
    }

    public void setNivel(Integer nivel) {
        this.nivel = nivel;
    }
}
