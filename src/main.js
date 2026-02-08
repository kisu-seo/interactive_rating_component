/**
 * Interactive Rating Component - 메인 로직
 */

// DOM 요소 가져오기 (DOM Elements)
const form = document.getElementById('rating-form');                             // 평점 선택 폼
const ratingState = document.getElementById('rating-state');                     // 평점 입력 화면
const thankyouState = document.getElementById('thankyou-state');                 // 감사 화면
const selectedRatingSpan = document.getElementById('selected-rating');           // 선택된 평점을 표시할 태그

// 폼 제출 이벤트 리스너 (Form Submit Event)
form.addEventListener('submit', (e) => {
    e.preventDefault(); // 페이지 새로고침 방지 (Prevent default page reload)

    // 사용자가 선택한 평점 라디오 버튼 가져오기 (Get selected rating)
    const selectedRating = document.querySelector('input[name="rating"]:checked');

    // 평점이 선택된 경우 처리
    if (selectedRating) {
        // 선택된 평점 값을 감사 화면의 텍스트로 업데이트 (Update Thank You text)
        selectedRatingSpan.textContent = selectedRating.value;

        // 화면 전환: 입력 화면을 숨기고 감사 화면을 표시 (Switch States)
        ratingState.classList.add('hidden');
        thankyouState.classList.remove('hidden');
    } else {
        // 평점이 선택되지 않은 경우 사용자에게 알림 (Warning if no selection)
        alert('평점을 선택해 주세요! (Please select a rating before submitting.)');
    }
});
