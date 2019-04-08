/**
 * Абстрактный класс представления фильтров и задач.
 * @class
 */
class GenericView {
  /**
   * Получение разметки.
   * @abstract
   */
  get _markup() {}

  /**
   * Генерация DOM-ноды по шаблону разметки.
   * @return {node} — DOM-нода
   */
  get _node() {
    const node = document.createElement(`template`);
    node.innerHTML = this._markup.trim();

    return node.content;
  }

  /**
   * Получение готового отображения DOM-ноды.
   * @return {node} — DOM-нода
   */
  get view() {
    return this._view;
  }
}

export default GenericView;
