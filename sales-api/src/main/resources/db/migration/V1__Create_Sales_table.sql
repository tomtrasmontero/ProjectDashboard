create table MAPS (
    ID serial,
    REGION varchar(100) NOT NULL,
    STATE varchar(100) NOT NULL,
    ABBR varchar(100) NOT NULL,
    X  varchar(100) NOT NULL,
    Y  varchar(100) NOT NULL,
    VALUE varchar(100) NOT NULL
);

create table SALES (
    ID serial,
    REGION varchar(100) NOT NULL,
    TIME varchar(100) NOT NULL,
    LINE varchar(100) NOT NULL,
    AREA varchar(100) NOT NULL
);