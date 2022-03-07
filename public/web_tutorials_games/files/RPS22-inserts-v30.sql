
insert into card (crd_name, crd_description) values('Rock','Rock crushes Scissors and Lizard');
insert into card (crd_name, crd_description) values('Paper','Paper covers Rock and Spock');
insert into card (crd_name, crd_description) values('Scissors','Scissors cuts Paper and Lizard');
insert into card (crd_name, crd_description) values('Lizard','Lizard poison Spock and eats Paper');
insert into card (crd_name, crd_description) values('Spock','Spock smashes Scissorsand vaporizes Rock');

insert into cardwcard (cwc_cwins_id, cwc_clooses_id) values(3,2);
insert into cardwcard (cwc_cwins_id, cwc_clooses_id) values(2,1);
insert into cardwcard (cwc_cwins_id, cwc_clooses_id) values(1,4);
insert into cardwcard (cwc_cwins_id, cwc_clooses_id) values(4,5);
insert into cardwcard (cwc_cwins_id, cwc_clooses_id) values(5,3);
insert into cardwcard (cwc_cwins_id, cwc_clooses_id) values(3,4);
insert into cardwcard (cwc_cwins_id, cwc_clooses_id) values(4,2);
insert into cardwcard (cwc_cwins_id, cwc_clooses_id) values(2,5);
insert into cardwcard (cwc_cwins_id, cwc_clooses_id) values(5,1);
insert into cardwcard (cwc_cwins_id, cwc_clooses_id) values(1,3);

insert into room (roo_name, roo_topcard_id) values('Room 1',1);

commit;
