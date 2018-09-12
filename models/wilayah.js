import mysql from '../db/mysql';

export const sqlGetProvinsi = (callback) => {
    const sql = 'SELECT * FROM wilayah WHERE LENGTH(kode) = 2';
    mysql.query(sql, (err, result) => {
        if (err) callback(err, null);
        callback(null, JSON.parse(JSON.stringify(result)));
    })
};

export const sqlGetKabupaten = (prov_id, callback) => {
    const sql = `SELECT nama, RIGHT(kode, 2) as kode FROM wilayah WHERE LENGTH(kode) = 5 AND LEFT(kode, 2) = '${prov_id}'`;
    mysql.query(sql, (err, result) => {
        if (err) callback(err, null);
        callback(null, JSON.parse(JSON.stringify(result)));
    });
};

export const sqlGetKecamatan = (prov_id, kab_id, callback) => {
    const sql = `SELECT nama, RIGHT(kode, 2) as kode FROM wilayah WHERE LENGTH(kode) = 8 AND LEFT(kode, 2) = '${prov_id}' AND MID(kode, 4, 2) = '${kab_id}'`;
    mysql.query(sql, (err, result) => {
        if (err) callback(err, null);
        callback(null, JSON.parse(JSON.stringify(result)));
    });
};

export const sqlGetKelurahan = (prov_id, kab_id, kec_id, callback) => {
    const sql = `SELECT nama, RIGHT(kode, 4) as kode FROM wilayah WHERE LENGTH(kode) = 13 AND LEFT(kode, 2) = '${prov_id}' AND MID(kode, 4, 2) = '${kab_id}' AND MID(kode, 7, 2) = '${kec_id}'`;
    mysql.query(sql, (err, result) => {
        if (err) callback(err, null);
        callback(null, JSON.parse(JSON.stringify(result)));
    });
};
