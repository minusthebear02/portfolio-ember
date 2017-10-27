export default function(){
  let pages = ['about', 'projects', 'blog', 'resume', 'contact'];

  this.transition(
    this.onInitialRender(this.matchSelector('.fade-in')),
     this.use('fade', {duration: 2000})
   );
  this.transition(
    this.fromRoute('home'),
    this.toRoute(pages),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  pages.shift();

  this.transition(
    this.fromRoute('about'),
    this.toRoute(pages),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  pages.shift();

  this.transition(
    this.fromRoute('projects'),
    this.toRoute(pages),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  pages.shift();

  this.transition(
    this.fromRoute('blog'),
    this.toRoute(pages),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  pages.shift();

  this.transition(
    this.fromRoute('resume'),
    this.toRoute(pages),
    this.use('toLeft'),
    this.reverse('toRight')
  );

}
