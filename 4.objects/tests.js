describe("Домашнее задание к занятию 4 «Объекты»", () => {
  describe("Задача №1 Инкапсуляция студента", () => {
    let student1 = new Student("Tony", "male", 37);
    student1.setSubject("Algebra");
    student1.addMark(5);
    student1.addMark(4);
    student1.addMark(5);
    student1.addMark(5);
    
    let student2 = new Student("Buzz", "female", 35);
    student2.setSubject("Geometry");
    student2.addMark(2);
    student2.addMark(3);
    student2.addMark(2);
    student2.addMark(3);
    
    it("Добавление оценок работает корректно", () => {
      console.log(student2.marks)
      expect(student1.marks).toEqual([5, 4, 5, 5]);
      expect(student2.marks).toEqual([2, 3, 2, 3]);
    });

    it("Вычисление средней оценки работает корректно", () => {
      console.log(student2.marks)
      expect(student1.getAverage()).toEqual(4.75);
      expect(student2.getAverage()).toEqual(2.5);
    });

    it("Установка предмета работает корректно", () => {
      expect(student1.subject).toEqual("Algebra");
      expect(student2.subject).toEqual("Geometry");
    });

    it("Отчисление студента работает корректно", () => {
      student2.excludeStudent('low grades')
      expect(student2.excluded).toEqual('low grades');
    });

  });
});
