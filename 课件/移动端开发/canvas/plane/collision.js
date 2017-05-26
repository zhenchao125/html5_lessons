//碰撞函数
function collide(obj1,obj2){
			
		var l1 = obj1.bulletX;
		var r1 = l1+obj1.bulletW;
		var t1 = obj1.bulletY;
		var b1 = t1+obj1.bulletH;
		
		var l2 = obj2.enemyX;
		var r2 = l2+obj2.enemyW;
		var t2 = obj2.enemyY;
		var b2 = t2+obj2.enemyH;
		
		if (r1>l2&&l1<r2&&b1>t2&&t1<b2){
			return true;
		}else{
			return false;
		}
	}

function collideHeroFly(obj1,obj2){
			
		var l1 = obj1.heroFlyX;
		var r1 = l1+obj1.heroFlyW;
		var t1 = obj1.heroFlyY;
		var b1 = t1+obj1.heroFlyH;
		
		var l2 = obj2.enemyX;
		var r2 = l2+obj2.enemyW;
		var t2 = obj2.enemyY;
		var b2 = t2+obj2.enemyH;
		
		if (r1>l2&&l1<r2&&b1>t2&&t1<b2){
			return true;
		}else{
			return false;
		}
	}

function collideAmmo(obj1,obj2){
			
		var l1 = obj1.heroFlyX;
		var r1 = l1+obj1.heroFlyW;
		var t1 = obj1.heroFlyY;
		var b1 = t1+obj1.heroFlyH;
		
		var l2 = obj2.ammoX;
		var r2 = l2+obj2.ammoW;
		var t2 = obj2.ammoY;
		var b2 = t2+obj2.ammoH;
		
		if (r1>l2&&l1<r2&&b1>t2&&t1<b2){
			return true;
		}else{
			return false;
		}
	}