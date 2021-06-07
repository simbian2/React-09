-- 시퀄라이즈 오토 설치
-- npm i sequelize-auto
-- npm install -g sequelize-auto 
-- npm i -g mysql2  
-- npx sequelize-auto -o "./models" -d db명 -h localhost -u root -p 3306 -x 비밀번호 -e mysql


--application, interview, review에 foreign key 부여
ALTER TABLE application
ADD CONSTRAINT curr_app_id
FOREIGN KEY (curr_id)
REFERENCES curriculum(id); 	

ALTER TABLE interview
ADD CONSTRAINT curr_int_id
FOREIGN KEY (curr_id)
REFERENCES curriculum(id); 	

ALTER TABLE review
ADD CONSTRAINT curr_rev_id
FOREIGN KEY (curr_id)
REFERENCES curriculum(id); 	

