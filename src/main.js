/**
 * ============================================
 * Interactive Rating Component - 메인 로직
 * ============================================
 * 
 * [기능 개요]
 * 사용자의 평점 선택 → 유효성 검증 → 감사 화면 전환
 * 
 * [주요 동작]
 * 1. 평점 선택: 5개의 라디오 버튼 중 하나 선택
 * 2. 제출 검증: 선택하지 않은 경우 경고 메시지 표시
 * 3. 상태 전환: Rating State 숨김 → Thank You State 노출
 * 4. 동적 렌더링: 선택된 평점을 감사 화면에 표시
 * 
 * [기술 스택]
 * - Vanilla JavaScript (프레임워크 없음)
 * - DOM API (querySelector, classList)
 * - HTML5 Form API (submit 이벤트)
 */

// ============================================
// DOM 요소 참조
// ============================================
// Why: 반복적인 DOM 접근 비용을 줄이기 위해 초기화 시 한 번만 조회
const form = document.getElementById('rating-form');
const ratingState = document.getElementById('rating-state');
const thankyouState = document.getElementById('thankyou-state');
const selectedRatingSpan = document.getElementById('selected-rating');

// ============================================
// 폼 제출 이벤트 핸들러
// ============================================
// Why: 사용자가 Submit 버튼 클릭 시 평점 제출 로직 실행
form.addEventListener('submit', (e) => {
    // [1단계] 기본 동작 방지
    // Why: 폼 제출 시 페이지 새로고침을 막아 SPA처럼 동작하도록 설정
    e.preventDefault();

    // [2단계] 유효성 검증
    // Why: 사용자가 평점을 선택했는지 확인 (라디오 버튼 중 :checked 상태 탐색)
    const selectedRating = document.querySelector('input[name="rating"]:checked');

    // [3단계] 조건부 처리
    if (selectedRating) {
        // ----------------------------------------
        // 성공 시나리오: 평점이 선택된 경우
        // ----------------------------------------

        // 선택된 평점 값을 감사 화면의 <span> 요소에 삽입
        // Result: "You selected 4 out of 5" 같은 형태로 사용자에게 피드백 제공
        selectedRatingSpan.textContent = selectedRating.value;

        // 화면 전환: Tailwind의 .hidden 클래스 토글
        // Why: CSS display: none을 활용하여 한 번에 하나의 상태만 표시
        ratingState.classList.add('hidden');       // 평점 입력 화면 숨김
        thankyouState.classList.remove('hidden');  // 감사 화면 노출

    } else {
        // ----------------------------------------
        // 실패 시나리오: 평점이 선택되지 않은 경우
        // ----------------------------------------

        // UX 설계: 사용자에게 즉각적인 피드백 제공
        // Why: 평점 미선택 시 제출을 막고 한/영 병기 메시지로 다국어 대응
        alert('평점을 선택해 주세요! (Please select a rating before submitting.)');

        // Result: 폼 제출이 중단되고 사용자는 평점 선택 화면에 유지됨
    }
});
