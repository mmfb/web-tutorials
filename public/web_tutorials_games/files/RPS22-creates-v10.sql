create table room (
					roo_id SERIAL not null,
					roo_name VARCHAR(60) not null, 	--room name
					roo_topcard VARCHAR(30), 				--room top card (the card currently on top)
					primary key (roo_id)	
);
		     		     


