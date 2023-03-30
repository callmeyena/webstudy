var idPass = false;

$('#id').on('keyup', function() {    
    // alert($(this).val());   // 아이디 입력란에 입력된 값: jquery: $(this).val() == javascript: this.value | 여기서 this는 이벤트 대상: $('#id')
    let idValue = $(this).val();
    if(idValue.length == 0) {
        $('#msg_id').text('');
        idPass = false; // 1번 방법(1)
    } else if(idValue.length < 4) {
        $('#msg_id').text('아이디는 4자 이상입니다.').css('color', '#FF0000').css('font-size', '14px');
        idPass = false; // 1번 방법(2)
    } else {
        $('#msg_id').text('사용 가능한 아이디 입니다.').css('color', '#0000FF').css('font-size', '14px');
        idPass = true; // 1번 방법(3)
    }
   // idPass = idValue.length >= 4; 2번 방법
})

$('#frm_login').on('submit', function(event) {
    if(idPass == false) {
        alert('아이디를 확인하세요.');
        event.preventDefault();
        return;
    } // 비밀번호도 같은 방법으로 하면 됨
    if($('#pw').val().length == '') {
        alert('비밀번호를 입력하세요.');
        event.preventDefault();
        return;
    }
})