(false && undefined); // false
(false || undefined); // undefined
((false && undefined) || (false || undefined)); // (2nd) undefined
((false || undefined) || (false && undefined)); // (2nd) false
((false && undefined) && (false || undefined)); // (1st) false
((false || undefined) && (false && undefined)); // (1st) undefined
('a' || (false && undefined) || ''); // 'a'
((false && undefined) || 'a' || ''); // 'a'
('a' && (false || undefined) && ''); // undefined
((false || undefined) && 'a' && ''); // undefined
