import psycopg2

# Configuración de la conexión
try:
    connection = psycopg2.connect(
        dbname="portofolio_web",
        user="admin",
        password="Giuliana15",  # Reemplaza esto con tu contraseña
        host="localhost",  # O usa '127.0.0.1'
        port="5432"  # Puerto por defecto de PostgreSQL
    )

    # Crear un cursor para realizar operaciones en la base de datos
    cursor = connection.cursor()

    # Ejecutar una consulta simple
    cursor.execute("SELECT version();")

    # Obtener el resultado
    record = cursor.fetchone()
    print(f"Connected to: {record}")

except Exception as error:
    print(f"Error connecting to PostgreSQL: {error}")

finally:
    # Cerrar la conexión
    if connection:
        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")
