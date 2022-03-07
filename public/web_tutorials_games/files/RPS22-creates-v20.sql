
create table card (
					crd_id SERIAL not null,
					crd_name VARCHAR(60) not null, 	-- card name
					crd_winsover_id INT not null, 	-- this card wins over this other card 
					crd_description VARCHAR(30), 	-- card description (this card wins over ...)
					primary key (crd_id)	
);

create table room (
					roo_id SERIAL not null,
					roo_name VARCHAR(60) not null, 	--room name
					roo_topcard_id INT not null, 	 --id of the room top card (the one currently on top)
					primary key (roo_id)	
);


-- Foreign key
-- a restriction that only allow you to insert an id valid, as room's top card
		     		     
alter table room 
add constraint room_fk_card
foreign key (roo_topcard_id) references card(crd_id) 
ON DELETE NO ACTION ON UPDATE NO ACTION;

