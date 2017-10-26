export default function(){
  this.transition(
    this.onInitialRender(this.hasClass('fade-in')),
     this.use('fade', {duration: 2000})
   );
  this.transition(
    this.fromRoute('home'),
    this.toRoute(['about', 'projects', 'resume', 'contact']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute(['projects', 'resume', 'contact']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('projects'),
    this.toRoute(['resume', 'contact']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('resume'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

}
