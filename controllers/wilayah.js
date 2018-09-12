import {sqlGetKabupaten, sqlGetKecamatan, sqlGetKelurahan, sqlGetProvinsi} from "../models/wilayah";

export const getWilayah = (req, res) => {
    const prov_id = req.query.prov;
    const kab_id = req.query.kab;
    const kec_id = req.query.kec;

    if (prov_id == null && kab_id == null && kec_id == null) {
        sqlGetProvinsi((err, result) => {
            if (err) return res.status(500).send('Server error');
            res.json({
                type: 'provinsi',
                total: result.length,
                data: result
            });
        });
    } else if (prov_id != null && kab_id == null && kec_id == null) {
        sqlGetKabupaten(prov_id, (err, result) => {
            if (err) return res.status(500).send('Server error');
            res.json({
                type: 'kabupaten',
                total: result.length,
                data: result
            });
        });
    } else if (prov_id != null && kab_id != null && kec_id == null) {
        sqlGetKecamatan(prov_id, kab_id, (err, result) => {
            if (err) return res.status(500).send('Server error');
            res.json({
                type: 'kecamatan',
                total: result.length,
                data: result
            });
        });
    }
    else if (prov_id != null && kab_id != null && kec_id != null) {
        sqlGetKelurahan(prov_id, kab_id, kec_id, (err, result) => {
            if (err) return res.status(500).send('Server error');
            res.json({
                type: 'desa',
                total: result.length,
                data: result
            });
        });
    } else {
        res.status(400).send('Query error');
    }


};
