$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(300);  // pの表示スピード
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(1000);  // start自体の消えるスピード
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！(状態維持時間)
});