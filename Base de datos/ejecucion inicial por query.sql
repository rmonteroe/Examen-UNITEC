-- Ejecutar este query en la base de datos deseada y poner los mismos en el conection string (CREATE DATABASE Unitec_test)

CREATE TABLE [dbo].[AgendaUnitec](
	[IdAgenda] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NULL,
	[Telefono] [varchar](50) NULL,
	[Descripcion] [varchar](500) NULL,
	[AliasUnitec] [varchar](50) NULL,
	[Empresa] [varchar](150) NULL,
 CONSTRAINT [PK_AgendaUnitec] PRIMARY KEY CLUSTERED 
(
	[IdAgenda] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[AgendaUnitec]
           ([Nombre]
           ,[Telefono]
           ,[Descripcion]
           ,[AliasUnitec]
           ,[Empresa])
     VALUES
           ('Ricardo '
           ,'55-66-15-99-26'
           ,'Desarrollador '
           ,'El Richy'
           ,'Unitec')
GO

INSERT INTO [dbo].[AgendaUnitec]
           ([Nombre]
           ,[Telefono]
           ,[Descripcion]
           ,[AliasUnitec]
           ,[Empresa])
     VALUES
           ('Richy'
           ,'55-66-18-83-28'
           ,'Query para 2 inserciones'
           ,'Montero Escudero'
           ,'Unitec')
GO