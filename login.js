var idPass = false;

$('#id').on('keyup', function() {    
    let idValue = $(this).val();
    if(idValue.length == 0) {
        $('#msg_id').text('');
        idPass = false; 
    } else if(idValue.length < 4) {
        $('#msg_id').text('아이디는 4자 이상입니다.').css('color', '#FF0000').css('font-size', '14px');
        idPass = false; 
    } else {
        $('#msg_id').text('사용 가능한 아이디 입니다.').css('color', '#0000FF').css('font-size', '14px');
        idPass = true; 
    }
})

$('#frm_login').on('submit', function(event) {
    if(idPass == false) {
        alert('아이디를 확인하세요.');
        event.preventDefault();
        return;
    } 
    if($('#pw').val().length == '') {
        alert('비밀번호를 입력하세요.');
        event.preventDefault();
        return;
    }
})