<div id="lesson" class="lesson">

    <div layout="row" layout-align="center center" class="lesson-header">

        <h4>LIÇÃO @{ currentLesson < 10 ? '0' : '' }@@{ currentLesson + 1 }@</h4>

    </div>

    <div layout="row" layout-align="center center" class="lesson-title">
        <md-icon md-svg-src="{{ url('/icons/chevron-left.svg') }}"
                 ng-class="{'disabled': lesson.prev_lesson_id === null}"
                 ng-click="previousLesson()"
                 aria-label="Previous Lesson"></md-icon>

        <md-select ng-model="lesson"
                   class="md-no-underline"
                   aria-label="Lesson Select"
                   ng-change="onLessonSelect()">
            <md-option ng-repeat="lesson in lessons" ng-value="lesson">
                @{ lesson.title }@
            </md-option>
        </md-select>

        <md-icon md-svg-src="{{ url('/icons/chevron-right.svg') }}"
                 ng-class="{'disabled': lesson.next_lesson_id === null}"
                 ng-click="nextLesson()"
                 aria-label="Next Lesson"></md-icon>
    </div>

    <div class="lesson-content">

        <div ng-bind-html="lesson.content" class="lesson-content-text"></div>

        <form name="lessonForm" class="lesson-form" ng-submit="answer(lessonForm)" ng-init="setForm(lessonForm)">

            <md-input-container class="md-block question">
                <textarea aria-label="Question query"
                          placeholder="Escreva sua resposta"
                          name="question"
                          rows="5"
                          ng-model="question"
                          md-no-resize></textarea>
                <div ng-messages="lessonForm.question.$error">
                    <div ng-message="empty">Escreva uma resposta.</div>
                    <div ng-message="hint">Resposta incorreta. Dica: @{ lesson.hint }@</div>
                    <div ng-message="correct">Resposta incorreta.</div>
                </div>
            </md-input-container>

            <div class="lesson-footer">
                <span ng-show="correctAnswer">
                    <md-icon md-svg-src="{{ url('/icons/check.svg') }}"></md-icon>
                    Certa resposta!
                </span>

                <md-button ng-show="correctAnswer && lesson.next_lesson_id !== null"
                           ng-click="nextLesson()"
                           class="md-raised"
                           type="button">
                    Próxima Lição
                </md-button>

                <md-button class="md-raised"
                           type="submit">
                    Enviar Resposta
                </md-button>
            </div>

        </form>

    </div>

</div>