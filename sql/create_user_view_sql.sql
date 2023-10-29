CREATE VIEW user_views AS
SELECT
    ud.id AS user_data_id,
    ud.user_type_id AS u_t_id,
    ud.user_id AS u_id,
    ud.country_id,
    ud.first_name,
    ud.middle_name,
    ud.last_name,
    ud.postal_code,
    ud.address,
    ud.telephone_number,
    ud.mobile_number,
    ud.email AS user_data_email,
    ud.date_of_birth,
    u.id AS user_id,
    u.username,
    u.email AS user_email,
    ut.name AS user_type_name
FROM user_data ud
         JOIN users u ON ud.user_id = u.id
         JOIN user_types ut ON ud.user_type_id = ut.id;
