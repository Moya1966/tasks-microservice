-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "tasks";

-- CreateTable
CREATE TABLE "tasks"."Tareas" (
    "ID_Tarea" SERIAL NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Estado" TEXT NOT NULL,
    "Fecha_Creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Fecha_Ejecucion" TIMESTAMP(3),
    "Cuenta" TEXT NOT NULL,
    "ID_Responsable" INTEGER NOT NULL,

    CONSTRAINT "Tareas_pkey" PRIMARY KEY ("ID_Tarea")
);

-- CreateTable
CREATE TABLE "tasks"."Comentarios" (
    "ID_Comentario" SERIAL NOT NULL,
    "Contenido" TEXT NOT NULL,
    "Fecha_Creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ID_Tarea" INTEGER NOT NULL,
    "ID_Usuario" INTEGER NOT NULL,

    CONSTRAINT "Comentarios_pkey" PRIMARY KEY ("ID_Comentario")
);

-- CreateTable
CREATE TABLE "tasks"."Usuarios" (
    "ID_Usuario" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Apellido" TEXT NOT NULL,
    "Correo" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("ID_Usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Correo_key" ON "tasks"."Usuarios"("Correo");

-- AddForeignKey
ALTER TABLE "tasks"."Tareas" ADD CONSTRAINT "Tareas_ID_Responsable_fkey" FOREIGN KEY ("ID_Responsable") REFERENCES "tasks"."Usuarios"("ID_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks"."Comentarios" ADD CONSTRAINT "Comentarios_ID_Tarea_fkey" FOREIGN KEY ("ID_Tarea") REFERENCES "tasks"."Tareas"("ID_Tarea") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks"."Comentarios" ADD CONSTRAINT "Comentarios_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "tasks"."Usuarios"("ID_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
